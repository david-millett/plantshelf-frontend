import { Link } from 'react-router-dom';

// Mantine modal menu
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';

// Components
import SignUp from "../../pages/SignUp/SignUp";

const SignUpPopUp = ({ setUser }) => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <main>
            <Modal
                opened={opened}
                onClose={close}
                title="Sign up"
                overlayProps={{backgroundOpacity: 0.55, blur: 2}}
                centered
            >
                {<SignUp setUser={setUser} close={close} />}
            </Modal>
            <Link onClick={open}>Sign up</Link>
        </main>
    )
}

export default SignUpPopUp