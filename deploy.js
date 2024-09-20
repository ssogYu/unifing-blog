const scpClient = require("scp2");
const ora = require("ora");
const chalk = require("chalk");
const spinner = ora("正在发布到生产服务器...");

//服务器相关配置
const server = {
  host: "47.100.82.151",
  port: 22,
  username: "root",
  password: "yss19950516&",
  path: "/root/blog",
};

const Client = require("ssh2").Client;
const conn = new Client();
conn
  .on("ready", function () {
    conn.exec("rm -rf " + server.path, function (err, stream) {
      if (err) {
        console.log(chalk.red(err));
        conn.end();
      } else {
        conn.exec("mkdir " + server.path, function (err2, stream2) {
          if (err2) {
            console.log(chalk.red(err2));
            conn.end();
          } else {
            spinner.start();
            scpClient.scp("build/", server, function (err3) {
              spinner.stop();
              if (err) {
                console.log(err3);
                console.log(chalk.red("发布失败.\n"));
              } else {
                console.log(
                  chalk.green(
                    "Success! 成功发布到\n" +
                      server.host +
                      "\n" +
                      server.path +
                      "\n"
                  )
                );
              }
              conn.end();
            });
          }
        });
      }
    });
  })
  .connect({
    host: server.host,
    port: server.port,
    username: server.username,
    password: server.password,
  });
