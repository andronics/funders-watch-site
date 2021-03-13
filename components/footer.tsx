import { ReactNode } from 'react'

import Container from './container'

export type FooterProps = {
    children?: ReactNode
}

export default function Footer({ children }: FooterProps) {
    return (

        <footer className="bg-secondary text-center text-light">
            
            <div className="container p-4">
            
                <div className="row">
            
                    <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Footer Content</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                            molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
                            voluptatem veniam, est atque cumque eum delectus sint!
                        </p>
                    </div>
            
                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Packages</h5>
                        <ul className="list-unstyled mb-0">
                            <li className="p-1">
                                <a href="#!">Grant Making For Organisations</a>
                            </li>
                            <li className="p-1">
                                <a href="#!">Grant Making For Individuals</a>
                            </li>
                            <li className="p-1">
                                <a href="#!">Company Giving For Organisations</a>
                            </li>
                            <li className="p-1">
                                <a href="#!">Statutory Support For Organisations</a>
                            </li>
                        </ul>
                    </div>
                
                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled mb-0">
                            <li className="p-1">
                                <a href="#!">FAQs</a>
                            </li>
                            <li className="p-1">
                                <a href="#!">Terms Of Use</a>
                            </li>
                            <li className="p-1">
                                <a href="#!">Privacy Policy</a>
                            </li>
                            <li className="p-1">
                                <a href="#!">Link 4</a>
                            </li>
                        </ul>
                    </div>
            
                </div>
            
            </div>
            
            <div className="text-center p-3 bg-primary">
                <a className="text-light" href="https://funders.watch/">
                    <span className="font-weight-bold">© 2021 FUNDERS WATCH</span>
                </a>
            </div>
        
        </footer>

    )
}