/* =====================================================================
   ⚙️  إعدادات العميل — هذا هو الملف الوحيد الذي تعدّله عند ربط عيادة/مشروع
   Firebase جديد. ضع نسخة مطابقة منه في مجلدات: doctor / nurse / booking.
   لا حاجة للبحث داخل الكود إطلاقاً.
   ===================================================================== */

/* (1) إعدادات مشروع Firebase
   من: Firebase Console → ⚙️ Project settings → Your apps → Web app → SDK config */
window.FIREBASE_CONFIG = {
     apiKey: "AIzaSyDeTJjhdBCpsh5CcSpE5Hrtb-_WkiLu3fo",
    authDomain: "docbook-86d2a.firebaseapp.com",
    databaseURL: "https://docbook-86d2a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "docbook-86d2a",
    storageBucket: "docbook-86d2a.firebasestorage.app",
    messagingSenderId: "705531150196",
    appId: "1:705531150196:web:e0763445d60fe255acf621"
  };


/* (2) حسابات جوجل للموظفين — نفس هذه الإيميلات يجب أن تُوضع في قواعد Firestore */
window.DOCBOOK_ROLES = {
  doctor: ['ahmadtaim450@gmail.com'],   // ← بريد/بُرُد الطبيب (يمكن أكثر من واحد)
  nurse:  ['aistam379@gmail.com']       // ← بريد/بُرُد الممرضة
};

/* (دالة مساعدة — لا تعدّلها) */
window.DOCBOOK_ROLE_OF = function (email) {
  email = (email || '').toLowerCase().trim();
  if ((window.DOCBOOK_ROLES.doctor || []).map(function (e) { return e.toLowerCase(); }).indexOf(email) !== -1) return 'doctor';
  if ((window.DOCBOOK_ROLES.nurse  || []).map(function (e) { return e.toLowerCase(); }).indexOf(email) !== -1) return 'nurse';
  return null;
};
