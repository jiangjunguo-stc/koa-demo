"use strict";

const request = require('request');
const querystring = require('querystring')
const logUtils = require('./logUtils');
const multiparty = require('multiparty');
const fs = require('fs');

module.exports = {
  get: async (api, clientParams, ctx) => {
    let _p =  clientParams || {};

    const options = {
      url: api.url,
      qs: _p,
      json: true
    }
    console.log(`--log-->:GET:\nurl: ${JSON.stringify(options.url)}\n`)
    console.log(`qs: ${JSON.stringify(options.qs)}`)
    return new Promise((resolve, reject) => {
      request(options, function (err, response, data) {
        if(err) {
          reject(err)
        }
        console.log(`${api.url}: ${JSON.stringify(data)}`)
        resolve(data)
      });
    });
  },
  post: async (api, clientParams, ctx) => {
    let _p =  clientParams || {};

    let options = {
      url: api.url,
      json: _p
    };
    console.log(`--log-->:POST:\n:URL: ${JSON.stringify(options.url)}\n`)
    console.log(`json: ${JSON.stringify(options.json)}`)
    return new Promise((resolve, reject) => {
      request.post(options, function (err, response, data) {
        if(err) {
          reject(err)
        }
        console.log(`${api.url}: ${JSON.stringify(data)}`)
        
        resolve(data)
      });
    });
  },
  plainPost: async (api, clientParams, ctx) => {
    let _p =  clientParams || {};
    let options = {
      url: `${api.url}?${querystring.stringify(_p)}`,
      json: {},
    }

    logUtils.log('POST:' + JSON.stringify(options, null, '  '))
    console.log(`--log-->:POST:\n:URL: ${JSON.stringify(options.url)}\n`)
    // console.log(`${api.json}: ${JSON.stringify(options.json)}`)
    return new Promise((resolve, reject) => {
      request.post(options, function (err, response, data) {
        if(err) {
          reject(err)
        }
        resolve(data)
      });
    });
  },
  put: async (api, clientParams, ctx) => {
    let _p =  clientParams || {};
    let options = {
      url: api.url,
      body: JSON.stringify(_p),
      // json: true,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      }
    };

    logUtils.log('PUT:' + JSON.stringify(options, null, '  '))
    console.log(`--log-->:PUT:\n: ${JSON.stringify(options.url)}\n`)
    console.log(`${JSON.stringify(options.body)}`)
    return new Promise((resolve, reject) => {
      request(options, function (err, response, data) {
        if(err) {
          reject(err)
        }
        resolve(data)
      });
    });
  },
  putWidthParamsInUrl: async (api, clientParams, ctx) => {
    let _p =  clientParams || {};
    let options = {
      url: api.url,
      qs: _p,
      json: true,
      method: 'PUT'
    };

    logUtils.log('PUT:' + JSON.stringify(options, null, '  '))
    console.log(`--log-->:PUT:\n ${JSON.stringify(options.url)}\n`)
    console.log(`${JSON.stringify(options.qs)}`)    
    return new Promise((resolve, reject) => {
      request(options, function (err, response, data) {
        if(err) {
          reject(err)
        }
        resolve(data)
      });
    });
  },
  upload: async (api, clientParams, ctx) => {
    let _p =  clientParams || {};
    let options = {
      url: api.url,
      body: JSON.stringify(_p),
      method: 'PUT',
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    };

    logUtils.log('UPLOAD:' + JSON.stringify(options, null, '  '))
    console.log(`--log-->:UPLOAD:\n ${JSON.stringify(options.url)}\n`)
    console.log(`${JSON.stringify(options.body)}`)
    return new Promise((resolve, reject) => {
      request(options, function (err, response, data) {
        if(err) {
          reject(err)
        }
        resolve(data)
      });
    });
  },
  uploadExcel: async (api, clientParams, ctx) => {
    let _p =  clientParams || {};
    console.log(`--log-->:UPLOAD:\n ${JSON.stringify(_p)}\n`)
    // console.log(`${JSON.stringify(options.body)}`)
    return new Promise((resolve, reject) => {
      let form = new multiparty.Form();
      form.parse(ctx.req, function (err, fields, files) {
        let r = request.post(api.url + '?orgId=' + _p.orgId + '&authorizeType=' + _p.authorizeType, (err, res, body) => {
          if (err) {
            reject(err)
          }
          resolve(body)
        });
        console.log(r)
        let formData = r.form();
        formData.append('file', fs.createReadStream(files.file[0].path));
      });
    })
  },
  delete: async (api, clientParams, ctx) => {
    let _p =  clientParams || {};
    let options = {
      url: api.url,
      // body: JSON.stringify(_p),
      // json: true,
      qs: _p,
      json: true,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    };

    logUtils.log('DELETE:' + JSON.stringify(options, null, '  '))
    console.log(`-log-->:DELETE ${JSON.stringify(options.url)}\n`)
    console.log(`${JSON.stringify(options.qs)}`)
    return new Promise((resolve, reject) => {
      request(options, function (err, response, data) {
        if(err) {
          reject(err)
        }
        resolve(data)
      });
    });
  },
  deleteWidthParamsInUrl: async (api, clientParams, ctx) => {
    let _p =  clientParams || {};
    let options = {
      url: api.url,
      qs: _p,
      json: true,
      method: 'DELETE'
    };

    logUtils.log('DELETE:' + JSON.stringify(options, null, '  '))
    console.log(`--log-->:DELETE ${JSON.stringify(options.url)}\n`)
    console.log(`${JSON.stringify(options.qs)}`)
    return new Promise((resolve, reject) => {
      request(options, function (err, response, data) {
        if(err) {
          reject(err)
        }
        resolve(data)
      });
    });
  }
}