import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import Condition from './Views/Condition'
import { App } from './Views/App'
import { MyForm } from './Views/MyForm'
import { NewStyles } from './Views/NewStyles';
import { Effect } from './Views/Effect';
import MyURLs from './Routes/Routes';

export function MyRoutes(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    {/* <Route path='/' element={<App />} />
                    <Route path="condition" element={<Condition />} />
                    <Route path="form" element={<MyForm />} />
                    <Route path="style" element={<NewStyles />} />
                    <Route path="effect" element={<Effect />} /> */}
                    {MyURLs.map((view, index) => (
                        <Route key={view.path} path={view.path} element={<view.view />} />
                    ))}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default function Layout(props) {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='condition'>
                            Condition
                        </Link>
                    </li>
                    <li>
                        <Link to='form'>
                            Form
                        </Link>
                    </li>
                    <li>
                        <Link to='style'>
                            Style
                        </Link>
                    </li>
                    <li>
                        <Link to='effect'>
                            Effect
                        </Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}