import styles from './SobreMim.module.css'
import PostModelo from "componentes/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobremim from 'assets/sobre_mim_foto.png'

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Bruno!
            </h3>

            <img 
                src={fotoSobremim} 
                alt="Foto do desenvolvedor sorrindo" 
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
                Olá, tudo bem? Eu sou estagiário de Análise e Desenvolvimento de Sistemas na Desbravador e fico muito feliz de te ver por aqui.
            </p>

            <p className={styles.paragrafo}>
                Minha história com programação começou no Instituto Federal de Santa Catarina (IFSC), onde cursei o ensino médio integrado ao curso de Informática. Nesse período tive contato com lógica de programação e com linguagens como PHP, Python e Java, o que despertou ainda mais meu interesse pela área.
            </p>

            <p className={styles.paragrafo}>
                Apesar de não me aprofundar totalmente em cada linguagem no período, essa base foi essencial para entender conceitos fundamentais e desenvolver o raciocínio lógico. Com o tempo, percebi que a programação ia muito além de apenas escrever código.
            </p>

            <p className={styles.paragrafo}>
                Já no estágio, tive uma experiência mais próxima da realidade do mercado, lidando com prazos, demandas reais e melhorias em sistemas utilizados por clientes. Esse contato prático acelerou muito meu aprendizado e amadurecimento como desenvolvedor.
            </p>

            <p className={styles.paragrafo}>
                Atualmente sigo estudando e aprimorando minhas habilidades, com foco em desenvolvimento front-end e React, sempre buscando escrever código mais organizado, legível e alinhado às boas práticas.
            </p>

        </PostModelo>
    )
}