module.exports = function (grunt) {
    var authToken = 'Bearer -VcLK4OUB-dMtvVZeXgTBwPvRNdwFc6PRzSdVc49fPVKxcCXNyPJzWuZ9ceBG5eEyTx_GIiW34Kj68m0isHhgzcRg6PWYXoOb9bXTAYSxpSm0KNHorpxFdn3qdBQNGYxCmyK1qMQfbl44EHUHJppx4pBv4eGbhFVYV8uMwRfUm1f7l6ZKQDsD0WUmPdQ8kWHDMYyvkMtRYt5WjXElyqcQaW-Bavb9npmIbAK5RqnJtEj7yswuL2xI0kXoM3Lgza6Wua9AIVIB0mMoyBcCrhmKMgvLjiW5QVVj9bKQ_Y2tfiEUaMdQ0GAIEam3fVqs0AA38w9HkclpLlPxi983KDJVLXnO0YZSWmNclv6vUg3SZgdt-9LI2cCxjyajDhmPq8l'
    var host = 'http://localhost:3000/'


    var callbackFunc = function (err, response, body) {
        if (err) {
            console.log("RESPONSE: " + response);
            console.log("\n ERR: " + JSON.stringify(err, null, 4) + "\n");
        }
        var pretty = "BODY: " + JSON.stringify(body, null, 4);
        console.log(pretty);
    }

    // Project configuration.
    grunt.initConfig({

        http: {
            register: {
                options: {
                    url: host + 'api/account/Register',
                    //headers: { Authorization: authToken },
                    callback: callbackFunc,
                    json: true,
                    body: 
                    {
                        "userName": "Taiseer",
                        "password": "SuperPass",
                        "confirmPassword": "SuperPass"
                    },
                    method: "POST",
                    ignoreErrors: true,
                }
            },
            getSample: {
                options: {
                    url: host + 'api/Sample',
                    //headers: { Authorization: authToken },
                    callback: callbackFunc,
                    ignoreErrors: true,
                    //json: true,
                    //body:
                    //{
                    //    "userName": "Taiseer",
                    //    "password": "SuperPass",
                    //    "confirmPassword": "SuperPass"
                    //},
                    //method: "POST",
                }
            },

            //createBuyOff: {
            //    options: {
            //        callback: callbackFunc,
            //        url: 'http://localhost:38643/api/buyoffering',
            //        headers: { "Authorization": authToken, "Content-Type": "application/json" },
            //        body: { 'Quantity': '100', 'Commodity': 'Milo', 'UnitOfMeasure': 'Bushel', 'OpeningPrice': '3.27', 'DeliveryDetails': { 'Location': 'KC', 'StartUtc': '2014-01-01', 'EndUtc': '2014-01-02' }, Id: 1000 },
            //        method: "POST",
            //        json: true
            //    }

            //}
        }

    });


    grunt.loadNpmTasks('grunt-http');
    // Default task.
    //grunt.registerTask('default', [http]);


};