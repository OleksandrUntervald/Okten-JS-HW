// – Створити масив з 10 об’єктами, які описують сутніть “користувач”.
// Поля: name, username,password. Вивести в консоль пароль кожного користувача

let arr = [
    {name: "name1",
     username: "username1",
     password: "password1"
    },
    {name: "name2",
        username: "username1",
        password: "password2"
    },
    {name: "name3",
        username: "username1",
        password: "password3"
    },
    {name: "name4",
        username: "username1",
        password: "password4"
    },
    {name: "name5",
        username: "username1",
        password: "password5"
    },
    {name: "name6",
        username: "username1",
        password: "password6"
    },
    {name: "name7",
        username: "username1",
        password: "password7"
    },
    {name: "name8",
        username: "username1",
        password: "password8"
    },
    {name: "name9",
        username: "username1",
        password: "password9"
    },
    {name: "name10",
        username: "username1",
        password: "password1."
    },
]

for (let i = 0; i < arr.length; i++){
    console.log(arr[i].password)
}