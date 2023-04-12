import { IconProps } from '../Types'

export const EyeOffOutline = ({
  title,
  fill = 'currentColor',
  stroke = 'none',
  ...props
}: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.3833 11.0029C21.0333 10.6329 20.5667 10.162 20.0083 9.68269 19.6083 9.33792 18.9917 9.37156 18.6333 9.75837 18.275 10.1452 18.3083 10.7422 18.7083 11.087 19.2083 11.5159 19.625 11.9363 19.9417 12.2727 20.0083 12.3483 20.05 12.4408 20.05 12.5418 20.05 12.6427 20.0167 12.7352 19.95 12.8108 19.25 13.534 18.1167 14.5936 16.7167 15.4597 15.3083 16.3342 13.6917 16.9817 12 16.9817H11.4417C10.9 16.9817 10.4667 17.4022 10.4667 17.9235 10.4667 18.4449 10.9 18.8653 11.4417 18.8653H12C14.1917 18.8653 16.1833 18.0328 17.7667 17.049 19.3583 16.0651 20.6167 14.8795 21.3833 14.089H21.3917C21.7833 13.6602 22 13.1136 22 12.5502 22 11.9868 21.7833 11.4402 21.3917 11.0197L21.3833 11.0029ZM10.725 15.0981 20.3333 5.81454C20.7167 5.44455 20.7167 4.84751 20.3333 4.47751 19.95 4.10751 19.3333 4.10751 18.95 4.47751L16.15 7.18521C14.8583 6.58817 13.45 6.2434 12.0167 6.21818H12C9.80833 6.21818 7.81667 7.05067 6.23333 8.03452 4.64167 9.01838 3.38333 10.204 2.61667 10.9945H2.60833C2.21667 11.4234 2 11.9699 2 12.5333 2 13.0967 2.21667 13.6433 2.60833 14.0638 3.63333 15.157 4.80833 16.1072 6.075 16.9144L3.65 19.2521C3.26667 19.6221 3.26667 20.2192 3.65 20.5892 4.03333 20.9592 4.65 20.9592 5.03333 20.5892L10.725 15.0897V15.0981ZM10.1917 12.5333C10.1917 12.0708 10.3833 11.6252 10.7167 11.2972 11.0583 10.9693 11.5167 10.7843 11.9917 10.7843 12.125 10.7843 12.25 10.8011 12.375 10.8263L10.2333 12.8949C10.2083 12.7772 10.1917 12.6511 10.1833 12.5249L10.1917 12.5333ZM4.05833 12.8024C3.99167 12.7268 3.95 12.6343 3.95 12.5333 3.95 12.4324 3.98333 12.3399 4.05 12.2643 4.75 11.5411 5.88333 10.4815 7.28333 9.61542 8.69167 8.74088 10.3083 8.10179 11.9833 8.09339 12.9083 8.1102 13.8083 8.2952 14.6667 8.60634L13.85 9.39678C13.2917 9.08565 12.6583 8.90065 11.9917 8.89224 10.9917 8.89224 10.0417 9.27065 9.33333 9.95178 8.625 10.6329 8.23333 11.5579 8.23333 12.5165 8.23333 13.1556 8.425 13.7695 8.75 14.3161L7.49167 15.5354C6.225 14.7701 5.05833 13.8536 4.05 12.7856L4.05833 12.8024Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5667 13.4079C13.4083 13.677 13.175 13.8956 12.9 14.047C12.4333 14.3076 12.2667 14.8795 12.5333 15.3335C12.8 15.7876 13.3917 15.9474 13.8667 15.6867C14.4417 15.3672 14.925 14.9131 15.2583 14.3581C15.5333 13.9124 15.375 13.3322 14.9083 13.0715C14.4417 12.8108 13.8417 12.9622 13.575 13.4079H13.5667Z"/>',
    }}
  />
)

export const tags = ['eye-off-outline', 'actions']