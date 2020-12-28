import { Nav } from '../components/Nav'
import Footer from '../components/footer'
import Meta from '../components/meta'


export default function Layout({ preview, children }) {
    return (
        <>
            <Meta />
            <div>
                <div>
                    <Nav />
                </div>

                <main>{children}</main>
            </div>
            <Footer />
        </>
    )
}
