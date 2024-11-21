import { Link } from 'react-router-dom';

// Mantine modal menu
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';

// Components
import SignIn from "../../pages/SignIn/SignIn";

const SignInPopUp = ({ setUser }) => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <main>
            <Modal
                opened={opened}
                onClose={close}
                title="Sign in"
                overlayProps={{backgroundOpacity: 0.55, blur: 2}}
                centered
            >
                {<SignIn setUser={setUser} close={close} />}
            </Modal>
            <Link onClick={open}>Sign in</Link>
        </main>
    )
}

export default SignInPopUp