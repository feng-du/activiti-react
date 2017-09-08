import axios from 'axios';
import { getAccessToken } from '../auth/auth';

export default axios.create({
    headers: { 'Authorization': `Bearer ${getAccessToken()}` }
  });

