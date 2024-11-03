import React, { useEffect, useState } from 'react';
import { Table, notification, Badge } from 'antd';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; 
import { db } from '../../firebase/config'

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [isSpin, setSpin] = useState(false);
  const auth = getAuth();
  const currentUser = auth.currentUser;

  useEffect(() => {
    const fetchOrders = async () => {
      setSpin(true);
      if (!currentUser) {
        notification.error({
          message: 'Error',
          description: 'You must be logged in to view your orders.',
        });
        return;
      }
      
      try {
        const ordersRef = collection(db, 'orders');
        const q = query(ordersRef, where('buyerId', '==', currentUser.uid));
        const querySnapshot = await getDocs(q);
        const ordersData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(ordersData);
        setSpin(false);
      } catch (error) {
        notification.error({
          message: 'Error',
          description: `Error fetching orders: ${error.message}`,
        });
      }
    };

    fetchOrders();
  }, [currentUser]);

  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'productName',
      key: 'productName',
    },
    // {
    //   title: 'Quantity',
    //   dataIndex: 'quantity',
    //   key: 'quantity',
    // },
    {
      title: 'Price',
      dataIndex: 'productPrice',
      key: 'productPrice',
      render: price => `$${Number(price || 0).toFixed(2)}`,
    },
    {
      title: 'Total',
      key: 'total',
      render: (_, record) => `${(Number(record.productPrice || 0) * Number(record.quantity || 1)).toFixed(2)}`,
    },
    {
      title: 'Order Date',
      dataIndex: 'timestamp',
      key: 'timestamp',
      render: timestamp => new Date(timestamp.seconds * 1000).toLocaleDateString(),  
    },
    {
      title: 'Status',
      key: 'status',
      render: () => (
        <Badge status="processing" text="In Processing" />
      ),
    },
  ];

  return (
    <main className="text-center m-5">
      <h3>Your Orders</h3>
      <Table
      className='table-responsive'
        loading={isSpin}
        dataSource={orders}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 5 }}
        style={{ marginTop: 20 }}
      />
    </main>
  );
};

export default Order;



