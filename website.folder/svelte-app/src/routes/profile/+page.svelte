<script>
    import { onMount } from 'svelte';
    import { base } from '$app/paths';

    let user = {
        firstName: "",
        secondName: "",
        email: "",
        phone: "",
        preferredLanguage: "",
        interestedDomains: ""
    };

    let showModal = false;
    let showProfile = false; // Переменная для отображения страницы с профилем

    function saveProfile() {
        showModal = true;
    }

    function closeModal() {
        showModal = false;
        showProfile = true; // Показать страницу с профилем после модального окна
    }

    function editProfile() {
        showProfile = false; // Вернуться к форме регистрации
    }

    onMount(() => {
        console.log("Profile Page Loaded");
    });
</script>

{#if showProfile}
    <!-- Страница профиля -->
    <div class="container">
        <h1>Profile Information</h1>
        <div class="profile-content">
            <div><strong>First Name:</strong> {user.firstName}</div>
            <div><strong>Second Name:</strong> {user.secondName}</div>
            <div><strong>Email:</strong> {user.email}</div>
            <div><strong>Phone:</strong> {user.phone}</div>
            <div><strong>Preferred Language:</strong> {user.preferredLanguage}</div>
            <div><strong>Interested Domains:</strong> {user.interestedDomains}</div>

            <button on:click={editProfile}>Edit</button>
        </div>
    </div>
{:else}
    <!-- Форма регистрации -->
    <div class="container">
        <h1>Profile</h1>
        <p>Get in touch via email at <a href="mailto:le.art@gmail.com">le.art@gmail.com</a></p>

        <div class="content">
            <div class="buttons">
                <button on:click={saveProfile}>Save</button>
            </div>
            <h2>Account Information</h2>
            <div class="form-group">
                <label>First Name</label>
                <input type="text" bind:value={user.firstName} />
            </div>
            <div class="form-group">
                <label>Second Name</label>
                <input type="text" bind:value={user.secondName} />
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" bind:value={user.email} />
            </div>
            <div class="form-group">
                <label>Phone Number</label>
                <input type="text" bind:value={user.phone} />
            </div>
            <div class="form-group">
                <label>Preferred Language</label>
                <input type="text" bind:value={user.preferredLanguage} />
            </div>
            <div class="form-group">
                <label>Interested Domains</label>
                <input type="text" bind:value={user.interestedDomains} />
            </div>
        </div>
    </div>
{/if}

{#if showModal}
    <div class="modal">
        <div class="modal-content">
            <p>Registration successful</p>
            <button on:click={closeModal}>OK</button>
        </div>
    </div>
{/if}

<style>
    h1 { color: #28a745; }
    p { font-size: 18px; }
    a { color: #007bff; text-decoration: none; }
    a:hover { text-decoration: underline; }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    .content {
        width: 50%;
        background: white;
        padding: 30px;
        text-align: center;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }

    .form-group {
        margin-bottom: 15px;
        text-align: left;
    }

    .form-group label {
        display: block;
        font-weight: bold;
        margin-bottom: 5px;
    }

    .form-group input {
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    .buttons {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }

    button {
        padding: 10px 20px;
        border: none;
        cursor: pointer;
        background: #007bff;
        color: white;
        border-radius: 4px;
    }

    button:hover {
        background: #0056b3;
    }

    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal-content {
        background: white;
        padding: 20px;
        border-radius: 10px;
        text-align: center;
    }

    .profile-content {
        width: 50%;
        background: white;
        padding: 30px;
        text-align: center;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
</style>
