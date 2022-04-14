import axios from 'axios';
import {Platform, StatusBar} from 'react-native';
// import { API_URL } from 'react-native-dotenv'
export const SERVER_URL = 'http://192.168.194.7:5050';
const API_URL = `${SERVER_URL}/api`;

export class Api {
  static rootUrl = API_URL;

  static async base() {
    const instance = axios.create({
      baseURL: this.rootUrl,
      timeout: 50000,
      withCredentials: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
    });

    if (Platform.OS === 'ios') {
      StatusBar.setNetworkActivityIndicatorVisible(true);
    }

    return instance;
  }

  static async request(options) {
    const base = await this.base();
    return base.request(options).then(response => {
      if (Platform.OS === 'ios') {
        StatusBar.setNetworkActivityIndicatorVisible(false);
      }
      return response;
    });
  }

  static async get(url, options) {
    const base = await this.base();
    return base.get(url, options).then(response => {
      if (Platform.OS === 'ios') {
        StatusBar.setNetworkActivityIndicatorVisible(false);
      }
      return response;
    });
  }

  static async post(url, options) {
    const base = await this.base();
    return base.post(url, options).then(response => {
      if (Platform.OS === 'ios') {
        StatusBar.setNetworkActivityIndicatorVisible(false);
      }
      return response;
    });
  }

  static async put(url, options) {
    const base = await this.base();
    return base.put(url, options).then(response => {
      if (Platform.OS === 'ios') {
        StatusBar.setNetworkActivityIndicatorVisible(false);
      }
      return response;
    });
  }

  static async patch(url, options) {
    const base = await this.base();
    return base.patch(url, options).then(response => {
      if (Platform.OS === 'ios') {
        StatusBar.setNetworkActivityIndicatorVisible(false);
      }
      return response;
    });
  }

  static async delete(url, options) {
    const base = await this.base();
    return base.delete(url, options).then(response => {
      if (Platform.OS === 'ios') {
        StatusBar.setNetworkActivityIndicatorVisible(false);
      }
      return response;
    });
  }

  static handleError(error) {
    console.log(error);
    if (Platform.OS === 'ios') {
      StatusBar.setNetworkActivityIndicatorVisible(false);
    }
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const {data} = error.response;
      if (data.errors) {
        const errors = data.errors;
      } else {
      }
    } else if (error.request) {
    } else {
    }
  }
}
