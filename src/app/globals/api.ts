import { environment } from '../../environments/environment';

export const GetService = async (route: string) => {
  let url = environment.webService + route;

  // console.log(
  //   'Calling endpoint: ' +
  //     url +
  //     ' with data: ' +
  //     JSON.stringify(body) +
  //     ' with method: ' +
  //     method,
  // );

  var config = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  return fetch(url, config)
    .then(async (response) => {
      if (response.ok) return Promise.resolve(response.json());

      if (!response.ok && response.status == 401) {
        throw 'You are unauthorized.';
      }

      return Promise.resolve(response.json()).then((responseInJson) => {
        // This will end up in ERROR part
        return Promise.reject(responseInJson);
      });
    })
    .then(function (result) {
      // console.log('API response1 ==>' + JSON.stringify(result));
      return result;
    })
    .catch(function (error) {
      console.log('Error: ' + JSON.stringify(error));
      if (error.Message === undefined) {
        // errorHandler(error);
        return;
      }
      if (error.Message !== null) {
        // errorHandler(error.Message);
        return;
      }
    });
};

export const SaveService = async (
  route: string,
  body: any,
  method: string = 'POST'
) => {
  let url = environment.webService + route;

  var config = {
    method: method,
    body: JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  return fetch(url, config)
    .then(async (response) => {
      // this needs to be fixed
      if (response.ok) return Promise.resolve(response.text());

      if (!response.ok && response.status == 401) {
        throw 'You are unauthorized.';
      }

      return Promise.resolve(response.json()).then((responseInJson) => {
        // This will end up in ERROR part
        return Promise.reject(responseInJson);
      });
    })
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log('Error: ' + JSON.stringify(error));

      throw error;

      // if (error.Message === undefined) {
      //   throw error
      // }
      // if (error.Message !== null) {
      //   // errorHandler(error.Message);
      //   return;
      // }
    });
};
