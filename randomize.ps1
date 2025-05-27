$commands = @(
    {
        Invoke-WebRequest -Uri http://127.0.0.1:5000/login -Method POST -ContentType "application/json" -Body '{"username":"admin", "password":"password123"}' | Select-Object -ExpandProperty Content
    },
    {
        Invoke-WebRequest -Uri http://127.0.0.1:5000/login -Method POST -ContentType "application/json" -Body '{"username":"user", "password":"wrongpassword"}' | Select-Object -ExpandProperty Content
    },
    {
        Invoke-WebRequest -Uri http://127.0.0.1:5000/register -Method POST -ContentType "application/json" -Body '{"username":"new_user", "email":"new_user@example.com"}' | Select-Object -ExpandProperty Content
    },
    {
        Invoke-WebRequest -Uri http://127.0.0.1:5000/password_reset -Method POST -ContentType "application/json" -Body '{"email":"user@example.com"}' | Select-Object -ExpandProperty Content
    },
    {
        Invoke-WebRequest -Uri http://127.0.0.1:5000/ -Method GET | Select-Object -ExpandProperty Content
    }
)

# Infinite loop to randomize and execute commands
while ($true) {
    $random = Get-Random -Maximum $commands.Count
    $commands[$random].Invoke()
}
