export interface NavProps {
  showNav:boolean,
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>
  toggleBtn:()=>void
}