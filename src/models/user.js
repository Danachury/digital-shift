class User {

   username;
   password;

   static name = () => 'digital-shift';

   static formattedName = () => {
      const text = User.name().replace('-', ' ');
      return text.charAt(0).toUpperCase() + text.slice(1);
   }

}

module.exports = User;
