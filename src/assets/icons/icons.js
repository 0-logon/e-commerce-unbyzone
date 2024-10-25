export const UserIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="21"
        fill="none"
        viewBox="0 0 16 21"
    >
        <path
            fill="#232323"
            d="M0 21a8 8 0 1116 0h-2a6 6 0 00-12 0H0zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
        ></path>
    </svg>
);

export const CartIcon = ({color, size}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size ? size : 21}
        height={size ? size : 21}
        fill="none"
        viewBox="0 0 21 21"
    >
        <path
            fill={color ? color : "#232323"}
            d="M2.005 14V2h-2V0h3a1 1 0 011 1v12h12.438l2-8H6.005V3h13.72a1 1 0 01.97 1.243l-2.5 10a1 1 0 01-.97.757H3.004a1 1 0 01-1-1zm2 7a2 2 0 110-4 2 2 0 010 4zm12 0a2 2 0 110-4 2 2 0 010 4z"
        ></path>
    </svg>
);

export const SearchIcon = ({ size }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size ? size : 21}
        height={size ? size : 21}
        fill="none"
        viewBox="0 0 21 21"
    >
        <path
            fill="#232323"
            d="M16.031 14.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 019 18c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0016 9c0-3.867-3.133-7-7-7S2 5.133 2 9s3.133 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"
        ></path>
    </svg>
);

export const CloseIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 20 20"
    >
        <path
            fill="#232323"
            d="M8.586 10L.793 2.207 2.207.793 10 8.586 17.793.793l1.414 1.414L11.414 10l7.793 7.793-1.414 1.414L10 11.414l-7.793 7.793-1.414-1.414L8.586 10z"
        ></path>
    </svg>
);

export const BurgerIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="16"
        fill="none"
        viewBox="0 0 18 16"
    >
        <path
            fill="#232323"
            d="M0 0h18v2H0V0zm0 7h18v2H0V7zm0 7h18v2H0v-2z"
        ></path>
    </svg>
);

export const ArrowRightIcon = ({ color }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
    >
        <path
            fill={color ? color : '#FAFAFA'}
            d="M12.172 7L6.808 1.636 8.222.222 16 8l-7.778 7.778-1.414-1.414L12.172 9H0V7h12.172z"
        ></path>
    </svg>
);