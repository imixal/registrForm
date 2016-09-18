$(document).ready(function () {
    $("#Register").click(function () {
        $("#preloder").show();
        $.get("/Home/RegisterMain").done(function (data) {
            $("#registration-wrapper").empty();
            $("#preloder").hide();
            $("#registration-wrapper").html(data);
            $("#main-info").validate({
                submitHandler: function(form) {
                    $("#preloder").show();
                    $.get("/Home/RegisterType").done(function (data) {
                        $("#registration-wrapper").empty();
                        $("#preloder").hide();
                        $("#registration-wrapper").html(data);
                        $("#NextAddress").click(function () {
                            $.get("/Home/RegiserAddress").done(function (data) {
                                $("registration-wrapper").empty();
                                $("#registration-wrapper").html(data);
                                $("#address-info").validate({
                                    submitHandler: function (form) {
                                        alert("Вы зарегистрированы!");
                                        location.href = location.href;
                                    },
                                    rules: {
                                        country: {
                                            required:true,
                                        },
                                        phone: {
                                            required: true,
                                            digits: true,
                                        },
                                        address: {
                                            required:true,
                                        }
                                    },
                                    messages: {
                                        country: {
                                            required: "Это поле обязательно для заполнения",
                                        },
                                        phone: {
                                            required: "Это поле обязательно для заполнения",
                                            digits: "Только цифры",
                                        },
                                        address: {
                                            required: "Это поле обязательно для заполнения",
                                        }
                                    }
                                });
                                $("#End").click(function () {
                                    $("#End").valid();
                                })
                            });
                        });
                    });
                },
                rules: {
                    login: {
                        required: true,
                        minlength: 4,
                        maxlength: 16,
                    },
                    name: {
                        required: true,
                    },
                    pass: {
                        required: true,
                        minlength: 6,
                        maxlength: 16,
                    },
                    email: {
                        required: true,
                        email: true,
                    }
                },
                messages:{

                    login:{
                         required: "Это поле обязательно для заполнения",
                         minlength: "Логин должен быть минимум 4 символа",
                         maxlength: "Максимальное число символо - 16",
                    },
                    name: {
                        required: "Это поле обязательно для заполнения",
                    },
                    pass: {
                        required: "Это поле обязательно для заполнения",
                        minlength: "Пароль должен быть минимум 6 символа",
                        maxlength: "Пароль должен быть максимум 16 символов",
                    },
                    email: {
                        required: "Это поле обязательно для заполнения",
                        email: "Некорректный Email",
                    }
                }
            });
            $("#Next").click(function () {
                $("#Next").valid();
            })
        });
    });
});
