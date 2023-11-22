<template>
    <div>
      <label for="UserAccount">帳號：</label>
      <input type="text" v-model="UserAccount" />
      <br/>
      <label for="UserPassword">密碼：</label>
      <input type="password" v-model="UserPassword" />
      <br/>
    </div>
    <div v-if="isRegister">
      <div>
        <label for="UserName">姓名：</label>
        <input type="text" v-model="UserName" />
      </div>
      <div>
        <label for="UserType">使用者身分：</label>
        <select v-model="UserType" class="selectorSize">
          <option value="cust">消費者</option>
          <option value="store">店家</option>
        </select>
      </div>
    </div>
    <br/>
    <br/>
    <input type="checkbox" v-model="isRegister" /> 註冊
    <br />
    <br />
   
    <button v-if="!isRegister" @click="submitForm">登入</button>
    <button v-else @click="signupForm">註冊</button>
</template>

<script>

import { ref,onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  name: 'loginPage',
  setup() {
    const router = useRouter();
    const UserAccount = ref('');
    const UserPassword = ref('');
    const UserName = ref('');
    const UserType = ref('');
    const isRegister = ref(false);

    const SignUp = async () => {
      try {
        let userInsert = {
          UserName: UserName.value,
          UserType: UserType.value,
          UserAccount: UserAccount.value,
          UserPassword: UserPassword.value,
        };
        let response = await axios.post('https://localhost:7288/UserInfo/UserInsert',userInsert)
        if (response.ok) { 
          let data = await response.json();
          if(data === true) {
            alert('恭喜申請成功~~ ಠ౪ಠ');
          } else {
            alert('帳號或密碼有錯誤...ʅ（´◔౪◔）ʃ');
          }
        }
      } catch (error) {
        alert('有資料錯誤囉...ʅ（´◔౪◔）ʃ');
      }
      
    }
    const LoginIn = async () => {
      try {
        const requestBody = {
          UserAccount: UserAccount.value,
          UserPassword: UserPassword.value,
        };
  
      let response = await fetch('https://localhost:7288/UserInfo/UserExist', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      });

      if (response.ok) { 
        let data = await response.json();
        if(data === true) {
          router.push({ name: 'MainPage' });
        } else {
          alert('帳號或密碼有錯誤...ʅ（´◔౪◔）ʃ');
        }
      }
      } catch (error) {
        alert('帳號或密碼有錯誤...ʅ（´◔౪◔）ʃ');
      }
    } ;

    const submitForm = async () => {
      LoginIn();
    };
    const signupForm = () => {
      SignUp();
    }
    onMounted(() => {
      // Automatically redirect to /login if not already on that route
      if (router.currentRoute.value.name !== 'login') {
        router.push({ name: 'login' });
      }
    });
    // 返回數據和方法
    return {
      UserAccount,
      UserPassword,
      UserName,
      UserType,
      SignUp,
      LoginIn,
      submitForm,
      signupForm,
      isRegister,
    };
  }
}
</script>
<style>
  .selectorSize {
    width: 100px;
  }

  .center-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* 100% viewport height */
  }

  .center-content {
    width: 300px; /* 你可以根据需要设置内容区域的宽度 */
    margin: auto; /* 水平居中 */
  }
</style>
