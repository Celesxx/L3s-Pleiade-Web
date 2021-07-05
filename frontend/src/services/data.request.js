import axios from "axios";

export function getDatas()
{
    const URL = "/getDatas";
    return axios(URL, {
      method: 'GET'
    })
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
};

export function updateData(id,data)
{
    const URL = `/putData/${id}`;
    return axios(URL, {
      method: 'PUT',
      data: data
    })
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
};

export function deleteData(id)  
{
  const URL = `/deleteData/${id}`;
  return axios(URL, {
    method: 'DELETE'
  })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

export function postData(data)
{
  const URL = `/postData`;
  return axios(URL, {
    method: 'POST',
    data: data
  })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};



export function getDataFilename()
{
    const URL = "/getDataName";
    return axios(URL, {
      method: 'GET'
    })
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
};

export function getDataByFilename(filename)
{
    const URL = `/getDataByName/${filename}`;
    return axios(URL, {
      method: 'GET'
    })
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
};

export function getFourierTransform()
{
    const URL = `localhost:5000/postData`;
    return axios(URL, 
    {
      method: 'POST',
      data: data
    })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}