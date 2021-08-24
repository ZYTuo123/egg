"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const res = { id: 1, name: "Lucy" };
    const list = [
      { id: 1, title: "this is news 1", url: "/news/1" },
      { id: 2, title: "this is news 2", url: "/news/2" },
    ];
    await ctx.render("index.html", {
      res,
      list,
    });
  }

  async detail() {
    const { ctx } = this;
    ctx.body = {
      data: {
        result: "TRUE",
        message: "success",
      },
    };
  }
}

module.exports = HomeController;
