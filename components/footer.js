// import styles from '../styles/components/footer.module.scss'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-inner'>
        <span>© Kalyn Beach {new Date().getFullYear()}</span>
        <div className='footer-links'>
          <a href='https://github.com/kalynbeach' target='_blank' rel='noopener noreferrer'>GitHub</a>
          <a href='https://discordapp.com/channels/@me/KB#8447/' target='_blank' rel='noopener noreferrer'>Discord</a>
          <a href='https://twitter.com/kalynbeach' target='_blank' rel='noopener noreferrer'>Twitter</a>
        </div>
      </div>

      <style jsx>{`
        @import '../styles/mixins.module.scss';
        @import '../styles/variables.module.scss';

        .footer {
          margin: 4rem 0 0;

          .footer-inner {
            @include layout-inner;
            min-height: $min-height-header;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            font-size: 0.75rem;
            font-family: $font-family-head;

            @media (max-width: $breakpoint-tablet) {
              min-height: $min-height-header + 20;
              flex-direction: column;
              justify-content: space-evenly;
            }

            span {
              margin: auto 0;
              color: white;
              @media (max-width: $breakpoint-tablet) {
                margin: 0;
                order: 2;
              }
            }

            .footer-links {
              display: flex;
              flex-direction: row;
              justify-content: space-evenly;
              align-items: center;

              @media (max-width: $breakpoint-tablet) {
                justify-content: flex-start;
                order: 1;
              }

              a {
                display: inline-block;
                color: white;
                text-decoration: none;
                &:not(:first-child) {
                  margin-left: 2rem;
                }
              }
            }
          }
        }
      `}</style>
    </footer>
  )
}