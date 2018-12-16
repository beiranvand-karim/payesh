
const Data = require('../models/Data');

module.exports.readData = async ctx => {

   try {
      const {value} = ctx.params;

      const newData = new Data({value, date: new Date()});
      const response = await newData.save();
      if (response) {
         ctx.status = 201;
         return ctx.body = response;
      }
   } catch (e) {
      ctx.status = e.code;
      ctx.body = e;
   }

};
