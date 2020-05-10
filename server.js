const Routes = require("./routes")
const Hapi = require("@hapi/hapi")
const init = async() =>{
    const server = new Hapi.Server({port:Settings.port});


server.route(Routes);

await server.start();
console.log(`Server running at: ${server.info.uri}`);
};
process.on("unhandleRejection", err=>{
    console.log(err);
    process.exit(1);
});
init();