function changeStep(step) {
    const content = document.getElementById('content');
    const step1Btn = document.getElementById('step1Btn');
    const step2Btn = document.getElementById('step2Btn');
    const step3Btn = document.getElementById('step3Btn');

    // Default to blue background for all steps
    step1Btn.style.backgroundColor = step2Btn.style.backgroundColor = step3Btn.style.backgroundColor = '#007bff';
    content.style.backgroundColor = '#007bff';

    switch (step) {
        case 1:
            content.innerHTML = `<h2>Step 1 CAR-MODEL</h2><p>The company began production of its first car model, the Roadster sports car, in 2008. This was followed by the Model S sedan in 2012, the Model X SUV in 2015, the Model 3 sedan in 2017, the Model Y crossover in 2020, and the Tesla Semi truck in 2022. The company plans production of the Cybertruck light-duty pickup truck in 2023.[7] The Model 3 is the all-time bestselling plug-in electric car worldwide, and in June 2021 became the first electric car to sell 1 million units globally.[8] Tesla's 2022 deliveries were around 1.31 million vehicles, a 40% increase over the previous year,[9][10] and cumulative sales totaled 4 million cars as of April 2023.[11] In October 2021, Tesla's market capitalization temporarily reached $1 trillion, the sixth company to do so in U.S. history.</p>`;
            step1Btn.style.backgroundColor = '#007bff';
            break;
        case 2:
            content.innerHTML = `<h2>Step 2 ROADSTER</h2><p>Tesla began production of the Roadster in 2008 inside the service bays of a former Chevrolet dealership in Menlo Park.[29][30] By January 2009, Tesla had raised $187 million and delivered 147 cars. Musk had contributed $70 million of his own money to the company.[31]

            In June 2009, Tesla was approved to receive $465 million in interest-bearing loans from the United States Department of Energy. The funding, part of the $8 billion Advanced Technology Vehicles Manufacturing Loan Program, supported the engineering and production of the Model S sedan, as well as the development of commercial powertrain technology.[32] Tesla repaid the loan in May 2013, with $12 million in interest.[33][34] </p>`;
            step2Btn.style.backgroundColor = '#28a745';
            content.style.backgroundColor = '#28a745';
            break;
        case 3:
            content.innerHTML = `<h2>Step 3 SOLAR-CITY</h2><p>Tesla entered the solar installation business in November 2016 with the purchase of SolarCity, in an all-stock $2.6 billion deal.[48] The business was merged with Tesla's existing battery energy storage products division to form the Tesla Energy subsidiary.[49] The deal was controversial because at the time of the acquisition, SolarCity was facing liquidity issues of which Tesla's shareholders were not informed.[50] In February 2017, Tesla Motors changed its name to Tesla, Inc. to better reflect the scope of its expanded business.[51]

            Tesla unveiled its first mass market vehicle in April 2016, the Model 3 sedan. Compared to Tesla's previous luxury vehicles, the Model 3 was less expensive and within a week the company received over 325,000 paid reservations.[52] In an effort to speed up production and control costs, Tesla invested heavily in robotics and automation to assemble the Model 3. Instead, the robotics actually slowed the production of the vehicles,[53] leading to significant delays and production problems, a period which the company would later come to describe as "production hell."[54][55] By the end of 2018, the production problems had been overcome, and the Model 3 would become the world's bestselling electric car from 2018 to 2021.</p>`;
            step3Btn.style.backgroundColor = '#dc3545';
            content.style.backgroundColor = '#dc3545';
            break;
    }
}

document.getElementById('step1Btn').addEventListener('click', () => changeStep(1));
document.getElementById('step2Btn').addEventListener('click', () => changeStep(2));
document.getElementById('step3Btn').addEventListener('click', () => changeStep(3));

// Initial content and background color
// changeStep(1);
// const searchInput = document.getElementById('searchInput');
// searchInput.addEventListener('input', () => {
//   const searchTerm = searchInput.value.toLowerCase();

//   tabs.forEach(tab => {
//     const tabText = tab.textContent.toLowerCase();
//     if (tabText.includes(searchTerm)) {
//       tab.style.display = 'flex';
//     } else {
//       tab.style.display = 'none';
//     }
//   });
// });