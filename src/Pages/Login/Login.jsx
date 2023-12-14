import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';



const Login = () => {

    const {signIn}= useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        // const name = form.name.value;
        const password = form.password.value;
        const email = form.email.value;
        console.log(email,password);

        signIn(email,password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error);
        })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2 mr-20">

                    <img src={img} alt="" />
                </div>
                <div className="card card-body shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin}
                    >
                        <h1 className="text-3xl text-center font-bold">Login!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email"
                                name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                name='password'
                                placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">

                            <input className='btn btn-success' type="submit" value="Login" />
                        </div>
                    </form>
                    <h2 className='text-center text-lg'>New to Car-doctor? <Link to='/signUp' className='text-orange-600 ml-2'>Sign Up</Link></h2>
                </div>
            </div>
        </div>
    );
};

export default Login;