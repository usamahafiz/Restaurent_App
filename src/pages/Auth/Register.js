import React, { useState } from 'react';
import { auth, db } from '../../firebase/config';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { Form, Input, Button, Radio, DatePicker, message } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import '../../scss/_registerpage.scss';
import { Link , useNavigate } from 'react-router-dom';

const Register = () => {
  const [ fullName, setFullName] = ('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [restaurentName, setrestaurentName] = useState('');
  const [restaurentDescription, setrestaurentDescription] = useState('');
  const [userRole, setUserRole] = useState('buyer');
  const [birthday, setBirthday] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Updated hook

  const handleRegister = async () => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userData = {
        fullName: fullName,
        email: email,
        role: userRole,
        birthday: birthday ? birthday.format('YYYY-MM-DD') : '',
        ...(userRole === 'seller' && {
          restaurentName,
          restaurentDescription,
        }),
      };

      await setDoc(doc(db, 'users', user.uid), userData);
      message.success('User registered successfully!');
      navigate('/seller-dashboard');
      resetForm();
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;


   

      const userData = {
        email: user.email,
        role: 'buyer',
        profilePic: user.photoURL || '',
        birthday: '',
      };

      await setDoc(doc(db, 'users', user.uid), userData);
      message.success('User registered successfully with Google!');
      resetForm();
    } 
    catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleError = (error) => {
    if (error.code === 'auth/network-request-failed') {
      message.error('Network error. Please check your internet connection and try again.');
    } else {
      message.error(`Error: ${error.message}`);
    }
    console.error('Error details:', error);
  };

  const resetForm = () => {
    setFullName('');
    setEmail('');
    setPassword('');
    setrestaurentName('');
    setrestaurentDescription('');
    setUserRole('buyer');
    setBirthday(null);
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h2 className="register-heading">Register</h2>
        <p className="register-subheading">Authentic and Delicious Meals!</p>
        <Form onFinish={handleRegister} layout="vertical" className="register-form">
          <Form.Item label="Role" required>
            <Radio.Group
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
              className="role-selector"
            >
              <Radio value="buyer">Customer</Radio>
              <Radio value="seller">Manager</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="FullName" required>
            <Input
              type="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your email"
              className="input-field"
            />
          </Form.Item>
          <Form.Item label="Email" required>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input-field"
            />
          </Form.Item>
          <Form.Item label="Password" required>
            <Input.Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="input-field"
            />
          </Form.Item>
          <Form.Item label="Birthday">
            <DatePicker
              value={birthday}
              onChange={(date) => setBirthday(date)}
              className="date-picker"
            />
          </Form.Item>
          {userRole === 'seller' && (
            <>
              <Form.Item label="Restaurent Name">
                <Input
                  value={restaurentName}
                  onChange={(e) => setrestaurentName(e.target.value)}
                  placeholder="Enter your restaurent name"
                  className="input-field"
                />
              </Form.Item>
              <Form.Item label="Restaurent Features">
                <Input.TextArea
                  value={restaurentDescription}
                  onChange={(e) => setrestaurentDescription(e.target.value)}
                  placeholder="Enter your restaurent features description"
                  className="input-field"
                />
              </Form.Item>
            </>
          )}
          <Form.Item>
            <Button htmlType="submit" loading={loading} className="register-button">
              Register
            </Button>
          </Form.Item>
          <Form.Item>
            <Button
              icon={<GoogleOutlined />}
              onClick={handleGoogleLogin}
              loading={loading}
              className="google-button"
            >
              Register with Google
            </Button>
          </Form.Item>
          <Form.Item>
            <span>Already have an account? </span>
            <Link to="/login" className="login-link">Login here</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
