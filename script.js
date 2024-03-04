// NON MODIFICARE QUESTO ARRAY!
const jobs = [
    { title: "Marketing Intern", location: "US, NY, New York" },
    {
        title: "Customer Service - Cloud Video Production",
        location: "NZ, Auckland",
    },
    {
        title: "Commissioning Machinery Assistant (CMA)",
        location: "US, IA, Wever",
    },
    {
        title: "Account Executive - Washington DC",
        location: "US, DC, Washington",
    },
    { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
    { title: "Accounting Clerk", location: "US, MD," },
    { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
    {
        title: "Lead Guest Service Specialist",
        location: "US, CA, San Francisco",
    },
    { title: "HP BSM SME", location: "US, FL, Pensacola" },
    {
        title: "Customer Service Associate - Part Time",
        location: "US, AZ, Phoenix",
    },
    {
        title: "ASP.net Developer Job opportunity at United States,New Jersey",
        location: "US, NJ, Jersey City",
    },
    {
        title: "Talent Sourcer (6 months fixed-term contract)",
        location: "GB, LND, London",
    },
    {
        title: "Applications Developer, Digital",
        location: "US, CT, Stamford",
    },
    { title: "Installers", location: "US, FL, Orlando" },
    { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
    {
        title: "VP of Sales - Vault Dragon",
        location: "SG, 01, Singapore",
    },
    { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
    {
        title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
        location: "GB, SOS, Southend-on-Sea",
    },
    { title: "Visual Designer", location: "US, NY, New York" },
    {
        title: "Process Controls Engineer - DCS PLC MS Office - PA",
        location: "US, PA, USA Northeast",
    },
    { title: "Marketing Assistant", location: "US, TX, Austin" },
    { title: "Front End Developer", location: "NZ, N, Auckland" },
    { title: "Engagement Manager", location: "AE," },
    {
        title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
        location: "US, CA, Carlsbad",
    },
    { title: "Customer Service", location: "GB, LND, London" },
    { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
    { title: "Marketing Exec", location: "SG," },
    {
        title: "HAAD/DHA Licensed Doctors Opening in UAE",
        location: "AE, AZ, Abudhabi",
    },
    {
        title: "Talent Management Process Manager",
        location: "US, MO, St. Louis",
    },
    { title: "Customer Service Associate", location: "CA, ON, Toronto" },
    {
        title: "Customer Service Technical Specialist",
        location: "US, MA, Waltham",
    },
    { title: "Software Applications Specialist", location: "US, KS," },
    { title: "Craftsman Associate", location: "US, WA, Everett" },
    { title: "Completion Engineer", location: "US, CA, San Ramon" },
    { title: "I Want To Work At Karmarama", location: "GB, LND," },
    {
        title: "English Teacher Abroad",
        location: "US, NY, Saint Bonaventure",
    },
]
//funzione per bottone contatti
function toggleDrop() {
    let dropMenu = document.querySelector('.dropMenu');
    dropMenu.style.display = dropMenu.style.display === 'block' ? 'none' : 'block';
}
// per prima cosa trasformo le mie costanti in minuscolo
// per rendere tutto case insesitive come da traccia

function searchJobsByLocationAndTitle(jobTitle, jobLocation) {
    // Converti le parole chiave in minuscolo per una ricerca case-insensitive
    const lowerJobTitle = jobTitle.toLowerCase();
    const lowerJobLocation = jobLocation.toLowerCase();

    // creo un array di appoggio dove inserirò i risultati
    const matchingJobs = [];

    // Itero gli oggetti nell'array con un ciclo for
    for (let i = 0; i < jobs.length; i++) {
        const job = jobs[i];
        const lowerJobTitleInJob = job.title.toLowerCase();
        const lowerJobLocationInJob = job.location.toLowerCase();

        // utilizzo un if per inserire i dati rilevati se utili all'interno di job
        if (lowerJobTitleInJob.includes(lowerJobTitle) &&
            (lowerJobLocationInJob.includes(lowerJobLocation) || lowerJobLocationInJob === lowerJobLocation)) {
            matchingJobs.push(job);
        }
    }

    // ho inserito in un oggetto i risultati ed il conto
    const result = {
        result: matchingJobs,
        count: matchingJobs.length

    };
    console.log("Risultati della ricerca:", result);
    return result;

}
const searchResult = searchJobsByLocationAndTitle("developer", "US");


const cerca = document.getElementById("searchJobs")



// test per funzione onclick
// Aggiungo un ascoltatore di eventi per il click sul pulsante
document.getElementById("searchJobs").addEventListener("click", function() {
    

    const jobTitle = document.getElementById("jobTitle").value;
    const jobLocation = document.getElementById("jobLocations").value;

    // Eseguo la ricerca con i valori forniti
    const searchResult = searchJobsByLocationAndTitle(jobTitle, jobLocation);

    // Se ci sono risultati, li aggiungo alla lista
    const searchResultsList = document.getElementById("searchResults");
    searchResultsList.innerHTML = ""; // elimino i risultati precedenti

    if (searchResult.result.length > 0) {
        searchResult.result.forEach(job => {
            const listItem = document.createElement("li");
            listItem.textContent = `${job.title} - ${job.location}`;
            searchResultsList.appendChild(listItem);
        });
    } else {
        const noResultsMessage = document.getElementById("noResultsMessage");
        noResultsMessage.style.display = "block";  // Mostra il messaggio di nessun risultato trovato
    }


    // Mostra il numero totale dei risultati trovati nella pg web
    const totalCount = document.createElement("li");
    totalCount.textContent = `Totale risultati: ${searchResult.count}`;
    searchResultsList.appendChild(totalCount); // Aggiungi il conteggio alla lista dei risultati

});
