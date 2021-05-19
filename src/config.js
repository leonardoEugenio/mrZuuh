function config() {
    const questions = [
        "Numero de Jogadores : ",
        "Quantidade de Assasinos : ",
        "Quantidade de Detetives : "
    ];

    const ask = (index = 0) => {
        process.stdout.write(questions[index]);
    }

    ask();

    var configuration = []
    process.stdin.on("data", data =>{
        configuration.push(data.toString().trim());
        if (configuration.length < questions.length) {
            ask(configuration.length);
        }else{
            console.log(configuration);
            process.exit();
        }
    });
}
module.exports = config;