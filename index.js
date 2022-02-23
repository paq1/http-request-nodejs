// imports
const https = require("https");

// request option create notif
const options = {
    hostname: 'notification-api.ref.apps.dev.foyer.cloud',
    path: '/notification/commands/notificationcreate',
    headers: {
        "Authorization": "Bearer eyJraWQiOiI2MjE0NmRiNWQ2NGExMjBlMzUzZjAwNTEiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJLUGtYY25wNW5wUXEzeDlNTWdLWENnIiwiaWF0IjoxNjQ1NTMwMjEyLCJleHAiOjE2NDU1Mzc0MTIsInZlcnNpb24iOjEsImVudiI6IlUiLCJzdWIiOiJ1c3I6aXkyIiwibmFtZSI6IkNvbXB0ZSBUZWNobmlxdWUgQVBJIE5vdGlmaWNhdGlvbnMgUmVjIiwiZ2l2ZW5fbmFtZSI6IkFQSSBOb3RpZmljYXRpb25zIHJlYyIsImZhbWlseV9uYW1lIjoiQ29tcHRlIFRlY2huaXF1ZSIsImVtYWlsIjoiaGtmQGZveWVyLmx1IiwibWV0YSI6eyJ0cmlncmFtbWUiOiJJWTIifX0.iWZyuqKo7a57jGDSVbUa6apB_kl8eGcjS06fdBFQ8rjR-noe0GOdGnmnoLodl8rUff_BXser3FIkji__xcjsTFXZeokoP7HNCHdLTPe5njMLm586llslXWPXFbXNTJLWQ7in5nUGcTWjJ6t3DL6yxK4NNY6oYHkqRSdTV45CcS-b-eqnR-sVDxuhwuRaUl8Fd1gwlyNioe1YE2A9oOl2sfbAjNd539yS2cx3B9AZ3RZrdnaEuAucSUOpCptioWiBd76-TD2gE8mGdACovnawSwIfFe0-wKqua1ZShJUtK0I6Vjk3zsZsUlZaIds5a9QxDUkal2ZZVAVApf2W2s-8Sg",
        'Content-Type': 'application/json'
    },
    method: 'POST'
}

// notif
const notif = {
    destinataire: {
        numeroPersonne: 171140
    },
    reference: {
        fr: "Facture n°221144 disponible"
    },
    libelle: {
        fr: "Nouvelle facture disponible"
    },
    type: "transactionnel",
    proprietes: {
        "identifiantTemplate": "2220558",
        "expediteurMail": "no-reply@foyer.lu",
        "expediteurLabel": "Agence, service client Foyer,",
        "sandBoxMail": "true"
    },
    parametres: {
        fullname: "Pierre De PAQUIN",
        documents: ["test", "test"]
    },
    dateExpiration: "2022-02-16T05:00:00.200Z"
    //,dateEnvoieDesiree: "2022-02-22T09:45:00.200Z"
}

// mapping object js -> string json
const data = new TextEncoder().encode(
    JSON.stringify(notif)
) 

// parametre de traitement
const nbCalls = 10;

// traitement
for (let i = 0; i < nbCalls; i++) {
    const req = https.request(options, res => {
        console.log(`status : ${res.statusCode}`)
    
        res.on('data', d => {
            process.stdout.write(d);
        });
    });
    
    req.on('error', error => {
        console.log(error)
    })
    req.write(data)
    req.end();
}