# instalar sqlmap
<pre>
    brew install sqlmap
</pre>
https://formulae.brew.sh/formula/sqlmap

## usar sqlmap


# Colocar senha no banco de dados
<pre>
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
mysql> FLUSH PRIVILEGES;
mysql> quit
</pre>
