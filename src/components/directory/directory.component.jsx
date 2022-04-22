import MenuItem from "../menu-item/menu-item.component";
import "./directory.style.scss";

const Directory = ({ sections }) => {
  return (
    <>
      <div className="directory-menu">
        {sections.map((menu) => (
          <MenuItem key={menu.id} menu={menu} />
        ))}
      </div>
    </>
  );
};

export default Directory;
