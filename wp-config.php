<?php
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do MySQL
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Configurações do MySQL - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define( 'DB_NAME', 'talent-bank' );

/** Usuário do banco de dados MySQL */
define( 'DB_USER', 'root' );

/** Senha do banco de dados MySQL */
define( 'DB_PASSWORD', '' );

/** Nome do host do MySQL */
define( 'DB_HOST', 'localhost' );

/** Charset do banco de dados a ser usado na criação das tabelas. */
define( 'DB_CHARSET', 'utf8mb4' );

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define( 'DB_COLLATE', '' );

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '/[}aOP[Dvk`P,DzpY8jXyZaq=.W-gYLxC-g0>1RytzFZruR5h$I {;Gulr#PWkhP' );
define( 'SECURE_AUTH_KEY',  'R^Zae7cm{&|TH&g)F9?c.<yR`#|)rG$GHy`rgP^/O9$RJBEDFGg!]mPX~x(Z~r[u' );
define( 'LOGGED_IN_KEY',    'GFVZ(1`RiMgz4`fVGU?aQDmQ*t}619kSE`{14t9=(#Z:/ZQ:/cB}VU6`53!^F Ps' );
define( 'NONCE_KEY',        'h$+d|JkeJUxC5jYP{+ff_2xx@$zPb(?8zj=X/y8:OrQuTOl6)>CP F+4+6QF?:Bd' );
define( 'AUTH_SALT',        '4kKlj&2[w7kTbd7gMLg9!@xR9: m7qH?;80e(JecfOfzjgG(lk:|JwHopJpSG_.M' );
define( 'SECURE_AUTH_SALT', 't7+:zHt7k>.6X0:!IZ:jx}-2l0h_XQq}U8^7NF70~1V2fD4h+7!J`!YHp38FIstO' );
define( 'LOGGED_IN_SALT',   'G)|?i0;o BP9$Ep+g.2Cdt,|j. Bxb dLOPg7d{OX<-JnCsS6)UuS)&=4h93hQ(R' );
define( 'NONCE_SALT',       'Ykcy}]VzL,qAW_ztusxZ}j33&&yg{4JnoiC1,BSk($Vu}<5NY~b?1P,WX5C|x~r]' );

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix = 'wp_';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Configura as variáveis e arquivos do WordPress. */
require_once ABSPATH . 'wp-settings.php';
