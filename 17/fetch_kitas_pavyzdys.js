const ul = document.querySelector('ul');

document.querySelector('button').addEventListener('click', () => {

    fetch('https://in3.dev/vinted/api/brands/all')

        .then(response => response.json())

        .then(data => {

            console.log(data);

            data.forEach(brand => {


                const html = `

                <i>${brand.id}</i>

                <b>${brand.title}</b>

                `;



                const li = document.createElement("li");


                li.innerHTML = html;


                ul.appendChild(li);

            });

        });

});