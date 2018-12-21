function Reset()
{
    localStorage.clear();
    alert('Obrisano.')
}

function inicijalizacija()
{
    localStorage.setItem('admin', 'admin123');
    localStorage.setItem('mika', 'mika123');
    localStorage.setItem('zika', 'zika123');
    Login();
}

function Login()
{
    var userName = document.forms["myForm"]["uname"].value;
    var userPw = document.forms["myForm"]["pwd"].value;

    if(userName == "admin")
    {
        if(userPw == "admin123")
            {
                window.location.href = "admin.html";
            }
        else
        {
            alert('Pogrešno korisničko ime ili šifra.');
        }
    }
    if(userName == "mika")
    {
        if(userPw == "mika123")
            {
                window.location.href = "user.html";
            }
        else
        {
            alert('Pogrešno korisničko ime ili šifra.');
        }
    }
    if(userName == "zika")
    {
        if(userPw == "zika123")
            {
                window.location.href = "user.html";
            }
        else
        {
            alert('Pogrešno korisničko ime ili šifra.');
        }
    }
}