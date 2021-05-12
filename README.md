# Colocar senha no banco de dados
<pre>
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
mysql> FLUSH PRIVILEGES;
mysql> quit
</pre>


# Quebrando 
<pre>
    1' or 1=1 or email = '1
</pre>

# Tabela 
<pre>
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL,
  `descricao` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
</pre>

# ordem dos branchs 
- main
- sqlinjection
- dados_expostos
- forca_bruta
- cross_site_script
- senha_cripto
- roubo_de_sessao
