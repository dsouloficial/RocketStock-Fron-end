import { FiUser, FiLogOut } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import { Container, User } from './styles';

export function Header() {
    const { signOut, user } = useAuth();

    return (
        <Container>
            <h1>Menu</h1>

            <aside>
                <User>
                    <span>Olá, <strong>{user.name}</strong></span>
                    <small>
                        <FiUser /> Perfil de {user.role}
                    </small>
                </User>
            </aside>

            <button type="button" onClick={signOut}>
                <FiLogOut size={24} />
            </button>
        </Container>
    );
};