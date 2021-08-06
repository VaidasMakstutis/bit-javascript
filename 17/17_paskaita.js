const ul = document.querySelector('ul');
document.querySelector('button').addEventListener('click', () => {

    fetch('https://in3.dev/vinted/api/brands/all')

        .then(response => response.json())
        .then(data => {

            console.log(data);
            data.forEach(brand => {

                //1. Sukuriam elementą

                const li = document.createElement("li");


                //2. Sukuriam text nodą

                const brandText = document.createTextNode(brand.title);



                //3. Text nodą įdedame į elementą

                li.appendChild(brandText);



                //4. Surandam html'e tėvinį tagą į kurį dėsim elementą

                //Turim ul



                //5. Į tėvą įdedame sukurtą elementą

                ul.appendChild(li);

            });

        });

})