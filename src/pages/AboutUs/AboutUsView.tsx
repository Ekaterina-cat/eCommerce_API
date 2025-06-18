import { Button } from '@components/ui/Button';
import { ROUTE_PATH } from '@routes/constants/routes';
import { JSX } from 'react';
import { useNavigate } from 'react-router';
const GitHubIcon = (): JSX.Element => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mr-2"
    >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);

const CVicon = (): JSX.Element => (
    <svg id="Layer_1" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
        <path d="m12.721 24h-12.721v-20.5c0-1.93 1.57-3.5 3.5-3.5h13c1.93 0 3.5 1.57 3.5 3.5v6.762c-.64-.165-1.308-.262-2-.262-.339 0-.672.028-1 .069v-6.569c0-.276-.224-.5-.5-.5h-13c-.276 0-.5.224-.5.5v17.5h7.587c.471 1.162 1.208 2.185 2.134 3zm11.279-6c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6 6 2.686 6 6zm-1.641-1.256-1.398-1.43-3.614 3.703-2.216-2.301-1.387 1.441 2.182 2.268c.766.765 2.079.763 2.823.019l.004-.004 3.607-3.696zm-12.359-2.744c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5zm-1.5-6.5c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5-.672-1.5-1.5-1.5-1.5.672-1.5 1.5zm4.094 2.979c-.274-.293-.661-.479-1.094-.479h-3c-.433 0-.82.186-1.094.48.518.903 1.48 1.52 2.594 1.52s2.076-.617 2.594-1.521zm-7.594 5.521v3h5.069c-.041-.328-.069-.661-.069-1 0-.692.097-1.36.262-2z" />
    </svg>
);

const TeamLiderIcon = (): JSX.Element => (
    <svg
        id="Layer_1"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        width="1.5em"
        height="1.5em"
        fill="yellow"
    >
        <path d="m15.5 9.5c0 1.933-1.567 3.5-3.5 3.5s-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5zm8.5 2.5c0 6.617-5.383 12-12 12s-12-5.383-12-12c0-3.159 1.218-6.142 3.429-8.398.58-.592 1.529-.602 2.121-.021.592.58.602 1.529.021 2.121-1.658 1.693-2.571 3.93-2.571 6.299 0 2.824 1.31 5.345 3.351 6.997.827-2.325 3.044-3.997 5.649-3.997s4.822 1.672 5.649 3.997c2.041-1.651 3.351-4.173 3.351-6.997 0-2.369-.913-4.606-2.571-6.299-.58-.592-.57-1.542.021-2.121.592-.579 1.541-.57 2.121.021 2.211 2.257 3.429 5.24 3.429 8.398zm-12 9c1.034 0 2.023-.184 2.949-.506-.242-1.413-1.468-2.494-2.949-2.494s-2.707 1.081-2.949 2.494c.925.322 1.915.506 2.949.506zm-3-16h6c.552 0 1-.448 1-1v-3.499c0-.198-.116-.376-.297-.457-.182-.079-.392-.046-.538.085l-1.377 1.242-.856-.955c-.497-.555-1.366-.555-1.864 0l-.856.955-1.377-1.242c-.146-.132-.357-.165-.538-.085-.181.081-.297.259-.297.457v3.499c0 .552.448 1 1 1z" />
    </svg>
);

const users = [
    { name: 'Hanna Pawlowa', githubUrl: 'https://github.com/hanna0101', githubUsername: 'hanna0101', cvUrl: '' },
    {
        name: 'Katsiaryna Dounar',
        githubUrl: 'https://github.com/Ekaterina-cat',
        githubUsername: 'ekaterina-cat',
        cvUrl: 'https://ekaterina-cat.github.io/rsschool-cv/',
    },
    {
        name: 'Tatiana Kovshik',
        githubUrl: 'https://github.com/insspirit',
        githubUsername: 'insspirit',
        cvUrl: ' https://Insspirit.github.io/rsschool-cv/',
    },
];

const UserInfo = ({
    name,
    githubUrl,
    githubUsername,
    cvUrl,
}: {
    name: string;
    githubUrl: string;
    githubUsername: string;
    cvUrl: string;
}): JSX.Element => (
    <div className="flex flex-col items-center gap-y-4">
        <h1 className="flex items-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            {name} {name === 'Hanna Pawlowa' && <TeamLiderIcon />}
        </h1>
        <a
            href={githubUrl}
            className="flex items-center hover:text-blue-500 hover:underline transition-all duration-300"
        >
            <GitHubIcon />
            {githubUsername}
        </a>
        <a href={cvUrl} className="flex items-center hover:text-blue-500 hover:underline transition-all duration-300">
            <div className="mr-2">
                <CVicon />
            </div>{' '}
            CV
        </a>
    </div>
);

export const AboutUsView = (): JSX.Element => {
    const navigate = useNavigate();
    const handleReturnToShop = (): void => {
        void navigate(ROUTE_PATH.PRODUCTS);
    };
    return (
        <div className="flex flex-col gap-y-20">
            <div className="flex flex-row flex-wrap justify-around gap-y-20">
                {users.map((user, index) => (
                    <div key={index} className="w-full md:w-auto">
                        <UserInfo
                            name={user.name}
                            githubUrl={user.githubUrl}
                            githubUsername={user.githubUsername}
                            cvUrl={user.cvUrl}
                        />
                    </div>
                ))}
            </div>
            <hr className="w-full border-t-2 border-gray-300 my-4" />
            <div className="flex flex-row flex-wrap items-center">
                <a href="https://rs.school/" className="w-1/2">
                    <img
                        src="rs_school_js.svg"
                        alt="rs_school_js"
                        className="h-24 hover:scale-110 transition duration-500"
                    />
                </a>
                <h3 className="w-1/2">
                    <p className="text-2xl font-bold">
                        RS School is a free and community-based online education program conducted by The Rolling Scopes
                        Community since 2013.
                    </p>
                    <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                        RS School Principles are an ability to complete our mission
                    </p>
                </h3>
            </div>
            <Button className="w-1/4" onClick={handleReturnToShop}>
                Return To Shop
            </Button>
        </div>
    );
};
