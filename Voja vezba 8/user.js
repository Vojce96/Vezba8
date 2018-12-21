function Sacuvaj()
{
    var rez_it = document.getElementById('italija').value;
    var rez_en = document.getElementById('engleska').value;
    
    localStorage.setItem(rez_it, rez_en);

    Prikazi();
}

function Preuzmi()
{
    var rez_it = document.getElementById('italija').value;
    var rez_en = document.getElementById('engleska').value;

    document.getElementById('italija').value = localStorage.getItem(rez_it);
    document.getElementById('engleska').value = localStorage.getItem(rez_en);
    Prikazi();
}

function Prikazi()
{
    var italija = document.getElementById('italija').value;
    var engleska = document.getElementById('engleska').value;

    if (italija == document.getElementById('rezervisi_it').onclick)
        {
        localStorage.getItem('italija');
        alert("Rezervisali ste Italiju!");
        
        if(engleska == document.getElementById('rezervisi_en').onclick)
            {
                localStorage.setItem('engleska');
                alert("Rezervisali ste Englesku!");
            }
        else
        {
            alert('Niste rezervisali.');
        }
    }
}