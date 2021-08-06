const ul = document.querySelector('ul');

document.querySelector('button').addEventListener('click', () => {

    fetch('https://picsum.photos/v2/list')

        .then(response => response.json())

        .then(data => {

            console.log(data);

            data.forEach(photos => {


                const html = `

                <i>${photos.id}</i>

                <b>${photos.author}</b>

                <b>${photos.download_url}</b>
                `;



                const li = document.createElement("li");


                li.innerHTML = html;


                ul.appendChild(li);

            });

        });

});