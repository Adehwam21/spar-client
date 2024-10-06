import React from 'react';
import Header from '../../components/Header/Header';
import Lobby from '../../components/Lobby/Lobby';
import Footer from '../../components/Footer';

function Dashboard() {
    return (
        <div className="flex flex-col h-screen font-poppins">
            <header className="flex-shrink-0">
                <Header />
            </header>
            <main className="flex-grow flex items-center justify-center">
                <Lobby />
            </main>
            <footer className="flex-shrink-0">
                <Footer />
            </footer>
        </div>
    );
}

export default Dashboard;
