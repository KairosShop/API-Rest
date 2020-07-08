const scopes = {
    admin:[
        "signin:auth",
        "signup:auth",
        "create:cart",
        "update:cart",
        "delete:cart",
        "create:orders"
    ],
    customer:[
        "signin:auth",
        "signup:auth",
        "create:cart",
        "update:cart",
        "delete:cart",
        "create:orders"
    ],
    supermarket:[
        "signin:auth",
        "signup:auth",
        "create:cart",
        "update:cart",
        "delete:cart",
        "create:orders"
    ]
}
module.exports = scopes;