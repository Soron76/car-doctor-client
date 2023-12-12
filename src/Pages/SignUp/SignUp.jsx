import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';



const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const passward = form.passward.value;
        const email = form.email.value;
        console.log(name, passward, email);

        createUser(email, passward)
        .then(result => {
            const user = result.user;
            console.log(user);
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
                    <form onSubmit={handleSignUp}
                    >
                        <h1 className="text-3xl text-center font-bold">Sign Up!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name"
                                name='name' className="input input-bordered" required />
                        </div>
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

                        </div>
                        <div className="form-control mt-6">

                            <input className='btn btn-success' type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <h2 className='text-center text-lg'>Already hava an account? <Link to='/login' className='text-orange-600 ml-2'>Login</Link></h2>
                </div>
            </div>
        </div>
    );
};

export default SignUp;