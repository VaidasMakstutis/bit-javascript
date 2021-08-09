const ul = document.querySelector('ul');

document.querySelector('button').addEventListener('click', () => {

    fetch('https://picsum.photos/v2/list')

        .then(response => response.json())

        .then(data => {

            console.log(data);

            data.forEach(photos => {


                const html = `
               
                <a href="${photos.download_url}" target="_blank"><img src="https://picsum.photos/id/${photos.id}/200/300"></a>
                <i>${photos.id}</i>
                <b>${photos.author}</b>
                `;
                


                const div = document.createElement("div");


                div.innerHTML = html;


                document.body.appendChild(div);

            });

        });

});