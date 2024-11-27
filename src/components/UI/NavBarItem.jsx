//style the individual navbar items
export default function NavBarItem({ items }) {
    return (
        <nav>
            <ul>
                {items.map((item) => item)}
            </ul>
        </nav>
    );
}