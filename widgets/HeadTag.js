import Head from 'next/head'

export default function HeadTag(props) {
    return(
        <Head>
            <title>{props.title}</title>
            <meta name="description" content={props.desc} />
            <link rel="icon" href="/TEFL.svg" />
        </Head>
    )
}
