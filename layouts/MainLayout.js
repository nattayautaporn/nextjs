import Link from "next/Link";

const MainLayout = props => {
    return (
        <div className='container'>
            <div className='topbar'>
                <div className='logo-container'>
                    <Link href='/'>
                        <a className="Link">STOCK</a>
                    </Link>
                </div>
                <div className='menu-container'>
                    <div>
                        <Link href='/products'>
                            <a className="Link">Product</a>
                        </Link>
                    </div>
                    <div>
                        <Link href='/manage'>
                            <a className="Link">Manager</a>
                        </Link>
                    </div>
                    <div>
                        <Link href='/profile'>
                            <a className="Link">Profile</a>
                        </Link>
                    </div>

                </div>
            </div>

            <div className="content">
                {props.children}
            </div>


            <style jsx global>{`
            @font-face{
                font-family:Roboto;
                src: url (/static/font/RobotoCondensed-Regular);
                font-weight: 400px
            }
            body{
                margin:0;
                font-family:'Roboto';
            }
            
        `}</style>

            <style jsx >{`
            .topbar{
                display: flex;
                justify-content: space-between;
                align:32px;
                height: 32px;
                padding: 0 40px;
                box-shadow: rgba(0,0,0,0.2) 0px 1px 2px ;
            }
            .menu-container{
                display : flex;
            }
            .menu-container div {
                margin-left: 5px;
            }
            
        `}</style>
        </div>
    )
}
export default MainLayout;